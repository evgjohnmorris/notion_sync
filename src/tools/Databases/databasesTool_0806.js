/**
 * Generated Tool: databasesTool_0806
 * Domain: Databases
 * ID: 0806
 */
exports.databasesTool_0806 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0806:', error);
    throw error;
  }
};
