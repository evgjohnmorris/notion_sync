/**
 * Generated Tool: usersTool_0549
 * Domain: Users
 * ID: 0549
 */
exports.usersTool_0549 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0549:', error);
    throw error;
  }
};
