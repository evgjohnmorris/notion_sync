/**
 * Generated Tool: usersTool_0630
 * Domain: Users
 * ID: 0630
 */
exports.usersTool_0630 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0630:', error);
    throw error;
  }
};
