/**
 * Generated Tool: usersTool_0925
 * Domain: Users
 * ID: 0925
 */
exports.usersTool_0925 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0925:', error);
    throw error;
  }
};
