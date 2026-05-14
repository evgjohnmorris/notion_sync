/**
 * Generated Tool: databasesTool_0508
 * Domain: Databases
 * ID: 0508
 */
exports.databasesTool_0508 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0508:', error);
    throw error;
  }
};
