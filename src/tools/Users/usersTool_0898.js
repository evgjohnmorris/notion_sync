/**
 * Generated Tool: usersTool_0898
 * Domain: Users
 * ID: 0898
 */
exports.usersTool_0898 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0898:', error);
    throw error;
  }
};
