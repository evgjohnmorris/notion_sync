/**
 * Generated Tool: usersTool_0783
 * Domain: Users
 * ID: 0783
 */
exports.usersTool_0783 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0783:', error);
    throw error;
  }
};
