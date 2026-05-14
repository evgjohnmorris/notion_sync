/**
 * Generated Tool: usersTool_0679
 * Domain: Users
 * ID: 0679
 */
exports.usersTool_0679 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0679:', error);
    throw error;
  }
};
