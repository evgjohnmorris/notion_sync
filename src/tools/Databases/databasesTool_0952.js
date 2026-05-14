/**
 * Generated Tool: databasesTool_0952
 * Domain: Databases
 * ID: 0952
 */
exports.databasesTool_0952 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0952:', error);
    throw error;
  }
};
