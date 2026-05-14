/**
 * Generated Tool: usersTool_0373
 * Domain: Users
 * ID: 0373
 */
exports.usersTool_0373 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0373:', error);
    throw error;
  }
};
