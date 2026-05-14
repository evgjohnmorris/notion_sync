/**
 * Generated Tool: databasesTool_0592
 * Domain: Databases
 * ID: 0592
 */
exports.databasesTool_0592 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0592:', error);
    throw error;
  }
};
