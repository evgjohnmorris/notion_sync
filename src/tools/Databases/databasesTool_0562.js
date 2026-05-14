/**
 * Generated Tool: databasesTool_0562
 * Domain: Databases
 * ID: 0562
 */
exports.databasesTool_0562 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0562:', error);
    throw error;
  }
};
