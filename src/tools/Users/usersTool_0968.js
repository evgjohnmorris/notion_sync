/**
 * Generated Tool: usersTool_0968
 * Domain: Users
 * ID: 0968
 */
exports.usersTool_0968 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0968:', error);
    throw error;
  }
};
