/**
 * Generated Tool: usersTool_0044
 * Domain: Users
 * ID: 0044
 */
exports.usersTool_0044 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0044:', error);
    throw error;
  }
};
