/**
 * Generated Tool: usersTool_0249
 * Domain: Users
 * ID: 0249
 */
exports.usersTool_0249 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0249:', error);
    throw error;
  }
};
