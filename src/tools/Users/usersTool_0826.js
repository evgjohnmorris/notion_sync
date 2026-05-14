/**
 * Generated Tool: usersTool_0826
 * Domain: Users
 * ID: 0826
 */
exports.usersTool_0826 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0826:', error);
    throw error;
  }
};
