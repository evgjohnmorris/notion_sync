/**
 * Generated Tool: usersTool_0262
 * Domain: Users
 * ID: 0262
 */
exports.usersTool_0262 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0262:', error);
    throw error;
  }
};
