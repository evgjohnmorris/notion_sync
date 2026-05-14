/**
 * Generated Tool: usersTool_0234
 * Domain: Users
 * ID: 0234
 */
exports.usersTool_0234 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0234:', error);
    throw error;
  }
};
