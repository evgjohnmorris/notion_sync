/**
 * Generated Tool: usersTool_0453
 * Domain: Users
 * ID: 0453
 */
exports.usersTool_0453 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0453:', error);
    throw error;
  }
};
