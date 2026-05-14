/**
 * Generated Tool: usersTool_0382
 * Domain: Users
 * ID: 0382
 */
exports.usersTool_0382 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0382:', error);
    throw error;
  }
};
