/**
 * Generated Tool: usersTool_0808
 * Domain: Users
 * ID: 0808
 */
exports.usersTool_0808 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0808:', error);
    throw error;
  }
};
