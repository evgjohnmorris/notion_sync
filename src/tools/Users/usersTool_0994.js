/**
 * Generated Tool: usersTool_0994
 * Domain: Users
 * ID: 0994
 */
exports.usersTool_0994 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0994:', error);
    throw error;
  }
};
