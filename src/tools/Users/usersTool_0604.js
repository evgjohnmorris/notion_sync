/**
 * Generated Tool: usersTool_0604
 * Domain: Users
 * ID: 0604
 */
exports.usersTool_0604 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0604:', error);
    throw error;
  }
};
