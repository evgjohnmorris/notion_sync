/**
 * Generated Tool: usersTool_0345
 * Domain: Users
 * ID: 0345
 */
exports.usersTool_0345 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0345:', error);
    throw error;
  }
};
