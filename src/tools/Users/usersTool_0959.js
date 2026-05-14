/**
 * Generated Tool: usersTool_0959
 * Domain: Users
 * ID: 0959
 */
exports.usersTool_0959 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0959:', error);
    throw error;
  }
};
