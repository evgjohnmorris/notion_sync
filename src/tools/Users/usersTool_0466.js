/**
 * Generated Tool: usersTool_0466
 * Domain: Users
 * ID: 0466
 */
exports.usersTool_0466 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0466:', error);
    throw error;
  }
};
