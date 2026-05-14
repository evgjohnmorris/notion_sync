/**
 * Generated Tool: usersTool_0562
 * Domain: Users
 * ID: 0562
 */
exports.usersTool_0562 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0562:', error);
    throw error;
  }
};
