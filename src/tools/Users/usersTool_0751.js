/**
 * Generated Tool: usersTool_0751
 * Domain: Users
 * ID: 0751
 */
exports.usersTool_0751 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0751:', error);
    throw error;
  }
};
