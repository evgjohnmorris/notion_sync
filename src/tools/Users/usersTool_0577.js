/**
 * Generated Tool: usersTool_0577
 * Domain: Users
 * ID: 0577
 */
exports.usersTool_0577 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0577:', error);
    throw error;
  }
};
