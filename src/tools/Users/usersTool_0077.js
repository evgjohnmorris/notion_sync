/**
 * Generated Tool: usersTool_0077
 * Domain: Users
 * ID: 0077
 */
exports.usersTool_0077 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0077:', error);
    throw error;
  }
};
