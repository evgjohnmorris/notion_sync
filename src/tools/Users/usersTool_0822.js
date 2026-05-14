/**
 * Generated Tool: usersTool_0822
 * Domain: Users
 * ID: 0822
 */
exports.usersTool_0822 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0822:', error);
    throw error;
  }
};
