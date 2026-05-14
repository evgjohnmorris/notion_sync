/**
 * Generated Tool: usersTool_0161
 * Domain: Users
 * ID: 0161
 */
exports.usersTool_0161 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0161:', error);
    throw error;
  }
};
