use proc_macro::TokenStream;
use quote::quote;
// use quote::ToTokens;
use syn::{self, Data};



#[proc_macro_derive(EnumId)]
pub fn enum_id_derive(input: TokenStream) -> TokenStream {
    // Construct a representation of Rust code as a syntax tree
    // that we can manipulate.
    let ast = syn::parse(input).unwrap();

    // Build the trait implementation.
    impl_macro_enumid(&ast)
}

fn impl_macro_enumid(ast: &syn::DeriveInput) -> TokenStream {
    let outer_name = &ast.ident;
    match &ast.data {
        Data::Enum(data_enum) => {
            let name_elements = data_enum.variants.iter();
            let values_elements = data_enum.variants.iter();
            let generated = quote! {
                use enum_id::EnumId;
                impl EnumId<#outer_name> for #outer_name {
                    fn name(&self) -> String {
                        match self {
                            #(#outer_name::#name_elements => stringify!(#name_elements).to_string()),*
                        }
                    }
                    fn values() -> Vec<#outer_name> {
                        vec!(
                            #(#outer_name::#values_elements),*
                        )
                    }
                }
            };
            generated.into()
        },
        Data::Struct(_) => panic!(),
        Data::Union(_) => panic!(),
    }
}
