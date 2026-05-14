/**
 * Generated Tool: usersTool_0690
 * Domain: Users
 * ID: 0690
 */
exports.usersTool_0690 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0690:', error);
    throw error;
  }
};
