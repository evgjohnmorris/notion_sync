/**
 * Generated Tool: databasesTool_0940
 * Domain: Databases
 * ID: 0940
 */
exports.databasesTool_0940 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0940:', error);
    throw error;
  }
};
