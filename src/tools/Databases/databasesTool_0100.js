/**
 * Generated Tool: databasesTool_0100
 * Domain: Databases
 * ID: 0100
 */
exports.databasesTool_0100 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0100:', error);
    throw error;
  }
};
