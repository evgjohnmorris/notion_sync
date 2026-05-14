/**
 * Generated Tool: usersTool_0914
 * Domain: Users
 * ID: 0914
 */
exports.usersTool_0914 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0914:', error);
    throw error;
  }
};
