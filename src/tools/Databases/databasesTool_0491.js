/**
 * Generated Tool: databasesTool_0491
 * Domain: Databases
 * ID: 0491
 */
exports.databasesTool_0491 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0491:', error);
    throw error;
  }
};
