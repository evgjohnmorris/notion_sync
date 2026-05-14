/**
 * Generated Tool: usersTool_0446
 * Domain: Users
 * ID: 0446
 */
exports.usersTool_0446 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0446:', error);
    throw error;
  }
};
