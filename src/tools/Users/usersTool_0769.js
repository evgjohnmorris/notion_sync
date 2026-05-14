/**
 * Generated Tool: usersTool_0769
 * Domain: Users
 * ID: 0769
 */
exports.usersTool_0769 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0769:', error);
    throw error;
  }
};
