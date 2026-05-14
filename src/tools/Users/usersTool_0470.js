/**
 * Generated Tool: usersTool_0470
 * Domain: Users
 * ID: 0470
 */
exports.usersTool_0470 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0470:', error);
    throw error;
  }
};
