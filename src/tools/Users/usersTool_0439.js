/**
 * Generated Tool: usersTool_0439
 * Domain: Users
 * ID: 0439
 */
exports.usersTool_0439 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0439:', error);
    throw error;
  }
};
