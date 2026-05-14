/**
 * Generated Tool: databasesTool_0559
 * Domain: Databases
 * ID: 0559
 */
exports.databasesTool_0559 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0559:', error);
    throw error;
  }
};
