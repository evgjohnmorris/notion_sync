/**
 * Generated Tool: databasesTool_0612
 * Domain: Databases
 * ID: 0612
 */
exports.databasesTool_0612 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0612:', error);
    throw error;
  }
};
