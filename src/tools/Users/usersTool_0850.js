/**
 * Generated Tool: usersTool_0850
 * Domain: Users
 * ID: 0850
 */
exports.usersTool_0850 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0850:', error);
    throw error;
  }
};
