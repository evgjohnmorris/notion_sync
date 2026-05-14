/**
 * Generated Tool: usersTool_0560
 * Domain: Users
 * ID: 0560
 */
exports.usersTool_0560 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0560:', error);
    throw error;
  }
};
