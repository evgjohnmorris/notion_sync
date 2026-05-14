/**
 * Generated Tool: usersTool_0614
 * Domain: Users
 * ID: 0614
 */
exports.usersTool_0614 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0614:', error);
    throw error;
  }
};
