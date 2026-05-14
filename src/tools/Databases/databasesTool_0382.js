/**
 * Generated Tool: databasesTool_0382
 * Domain: Databases
 * ID: 0382
 */
exports.databasesTool_0382 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0382:', error);
    throw error;
  }
};
