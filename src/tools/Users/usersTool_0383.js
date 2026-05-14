/**
 * Generated Tool: usersTool_0383
 * Domain: Users
 * ID: 0383
 */
exports.usersTool_0383 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0383:', error);
    throw error;
  }
};
