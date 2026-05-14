/**
 * Generated Tool: usersTool_0746
 * Domain: Users
 * ID: 0746
 */
exports.usersTool_0746 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0746:', error);
    throw error;
  }
};
