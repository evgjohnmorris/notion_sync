/**
 * Generated Tool: usersTool_0781
 * Domain: Users
 * ID: 0781
 */
exports.usersTool_0781 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0781:', error);
    throw error;
  }
};
