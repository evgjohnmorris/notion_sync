/**
 * Generated Tool: usersTool_0061
 * Domain: Users
 * ID: 0061
 */
exports.usersTool_0061 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0061:', error);
    throw error;
  }
};
